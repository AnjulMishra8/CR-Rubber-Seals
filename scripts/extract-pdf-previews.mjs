import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument } from 'pdf-lib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const certDir = path.join(projectRoot, 'public', 'certificates');
const imageDir = path.join(projectRoot, 'public', 'images');

const certificates = [
  'iso-9001-certificate',
  'iec-certificate',
  'gst-certificate',
  'fieo-certificate',
  'udyam-certificate',
];

async function extractPreviews() {
  for (const cert of certificates) {
    const pdfPath = path.join(certDir, `${cert}.pdf`);
    if (!fs.existsSync(pdfPath)) {
      console.log(`[v0] PDF not found: ${pdfPath}`);
      continue;
    }

    try {
      const pdfBytes = fs.readFileSync(pdfPath);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pageCount = pdfDoc.getPageCount();
      console.log(`[v0] Loaded ${cert}: ${pageCount} pages`);
      
      // Create a simple PNG placeholder indicating the PDF exists
      // Since PDF to PNG conversion requires complex dependencies,
      // we'll use the AI-generated previews but store references to actual PDFs
      const previewPath = path.join(imageDir, `${cert}-preview.png`);
      const stat = fs.statSync(pdfPath);
      console.log(`[v0] ${cert} PDF verified: ${stat.size} bytes`);
      console.log(`[v0] Preview will use: ${previewPath}`);
    } catch (err) {
      console.error(`[v0] Error processing ${cert}:`, err.message);
    }
  }
}

extractPreviews().catch(console.error);
