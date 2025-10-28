import multer from "multer";

// Store files in memory for quick Cloudinary upload
const storage = multer.memoryStorage();

// Filter to allow only images or PDFs
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith("image/") ||  // JPG, PNG, etc.
    file.mimetype === "application/pdf"    // PDF resumes
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only image and PDF files are allowed!"), false);
  }
};

// Export single file upload middleware
export const singleUpload = multer({ storage, fileFilter }).single("file");
