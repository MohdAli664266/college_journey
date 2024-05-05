const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_ULR),
    projectId: String(import.meta.env.VITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_DATABASE_ID),
    collectionId: String(import.meta.env.VITE_COLLECTION_ID),
    bucketId: String(import.meta.env.VITE_BUCKET_ID),
    studentId: String(import.meta.env.VITE_STUDENT_ID),
    postId: String(import.meta.env.VITE_POST_ID),
    
}

export default conf;