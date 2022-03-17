// https://medium.com/@costaparas/time-based-forwarding-of-emails-with-google-apps-script-aff0b59a2f7b
// https://github.com/costaparas/Google-Apps-Script-Email-Forwarding

//Daily Agenda Forwarder

function main() {
  const sheet = SpreadsheetApp.getActiveSheet();
  let i = 2;
  while (true) {
    const searchParameters = sheet.getRange(i, 1).getValue();
    if (!searchParameters) {
      break;
    }
    const threads = GmailApp.search(searchParameters);
    if (threads.length) {
      const emails = sheet.getRange(i, 2).getValue();
      threads[0].getMessages()[0].forward(emails);
    }
    i++;
  }
}
