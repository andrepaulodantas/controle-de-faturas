declare module 'pdf-parse' {
  interface PDFParseOptions {
    pagerender?: (pageData: any) => any;
    max?: number;
    version?: string;
  }

  interface PDFInfo {
    PDFFormatVersion: string;
    IsAcroFormPresent: boolean;
    IsXFAPresent: boolean;
    Title: string;
    Author: string;
    Subject: string;
    Keywords: string;
    Creator: string;
    Producer: string;
    CreationDate: string;
    ModDate: string;
    Trapped: string;
  }

  interface PDFMetadata {
    _metadata: any;
    _metadataRaw: any;
  }

  interface PDFText {
    text: string;
  }

  interface PDFData {
    numpages: number;
    numrender: number;
    info: PDFInfo;
    metadata: PDFMetadata;
    text: string;
    version: string;
  }

  function pdf(dataBuffer: Buffer, options?: PDFParseOptions): Promise<PDFData>;

  export = pdf;
}
