const SHEET_ID = '1T62u_N6CNzeQv5LRXknQX1WFeZJXNL5_Vkejmi16Psc';
const SHEET_NAME = 'Sheet1';
const BANGKOK_TIMEZONE = 'Asia/Bangkok';
const THAI_DATETIME_FORMAT = 'dd-MM-yyyy HH:mm:ss';

function doOptions() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const submittedDate = payload.submittedAt ? new Date(payload.submittedAt) : new Date();
    const safeSubmittedDate = isNaN(submittedDate.getTime()) ? new Date() : submittedDate;
    const submittedAt = Utilities.formatDate(
      safeSubmittedDate,
      BANGKOK_TIMEZONE,
      THAI_DATETIME_FORMAT
    );

    const row = [
      submittedAt,
      payload.projectTitle || '',
      payload.member1Name || '',
      payload.member1Class || '',
      payload.member2Name || '',
      payload.member2Class || '',
      payload.member3Name || '',
      payload.member3Class || '',
      payload.contactMethod || '',
      payload.problem || '',
      payload.solution || '',
      payload.targetPlatform || '',
      payload.mvpFeature || ''
    ];

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'submittedAt',
        'projectTitle',
        'member1Name',
        'member1Class',
        'member2Name',
        'member2Class',
        'member3Name',
        'member3Class',
        'contactMethod',
        'problem',
        'solution',
        'targetPlatform',
        'mvpFeature'
      ]);
    }

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(
        JSON.stringify({
          ok: false,
          error: String(error)
        })
      )
      .setMimeType(ContentService.MimeType.JSON);
  }
}
