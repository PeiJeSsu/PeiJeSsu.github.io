// Prints a web page to a paginated PDF using the system WebKit, honoring
// the page's print CSS (@page size and margins).
// Usage: swift scripts/print-pdf.swift <url> <output.pdf>
import AppKit
import WebKit

let args = CommandLine.arguments
guard args.count == 3, let url = URL(string: args[1]) else {
  FileHandle.standardError.write("usage: print-pdf.swift <url> <output.pdf>\n".data(using: .utf8)!)
  exit(2)
}
let output = URL(fileURLWithPath: args[2])

final class Printer: NSObject, WKNavigationDelegate {
  let webView = WKWebView(frame: NSRect(x: 0, y: 0, width: 816, height: 1056))

  func start(_ url: URL) {
    webView.navigationDelegate = self
    webView.load(URLRequest(url: url))
  }

  func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
    // Give web fonts a moment to load before printing.
    DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) { self.printPage() }
  }

  func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
    fail(error)
  }

  func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
    fail(error)
  }

  func fail(_ error: Error) {
    FileHandle.standardError.write("load failed: \(error)\n".data(using: .utf8)!)
    exit(1)
  }

  func printPage() {
    let info = NSPrintInfo()
    info.paperSize = NSSize(width: 612, height: 792) // US Letter
    info.topMargin = 0
    info.bottomMargin = 0
    info.leftMargin = 0
    info.rightMargin = 0
    info.jobDisposition = .save
    info.dictionary()[NSPrintInfo.AttributeKey.jobSavingURL] = output
    let op = webView.printOperation(with: info)
    op.showsPrintPanel = false
    op.showsProgressPanel = false
    op.view?.frame = webView.bounds
    op.runModal(for: NSWindow(), delegate: self, didRun: #selector(done), contextInfo: nil)
  }

  @objc func done(_ op: NSPrintOperation, success: Bool, contextInfo: UnsafeMutableRawPointer?) {
    exit(success ? 0 : 1)
  }
}

let app = NSApplication.shared
let printer = Printer()
printer.start(url)
app.run()
