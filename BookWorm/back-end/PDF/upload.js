import AWS from 'aws-sdk';

// Configuring AWS S3
const s3 = new AWS.S3({
  accessKeyId: 'ASIAQ3EGT5ZZLKS6BSUW',
  secretAccessKey: 'WmjYHIQBjif7yz/uNYBL1bTXIQ3E0v4DYmPWoqwM',
  region : "us-east-1",
  sessionToken: 'FwoGZXIvYXdzEEsaDFAI/soxuHdgSvmJ2SLFAWQAg1Iojp1vIr1RqMCCmWa3WtV6WR8QEtyDGooRoeiSAI8DmfYxmDJo6HOqRyLenBjWg2qsHYa5d0Sd/+fPm5RROhPgfA+dHNrpSzE59sKmUm1pKe3fF+/V8vvvc5vipzdmkvphGxRqyDg1x6k9SelYkfIlZUFQFfAUjamERcg3c7oZ5ViSTxIZQ6bGyyTYO6RRdgIHh/ku6P8ooEKS8sgnUrWcFAuQKF+M9LyiPYJ9FCES9x9/pls7o1oE6qYp5IHB8qJYKPPFwK8GMi1vH4c+e3k2fCHYTcVlam1OJ2HFtnhpZI7JuLs6o6tXzMk3ISp4cGDDnFENtwg='
});

const uploadPdfToS3 = async (file, filename) => {
  const params = {
    Bucket: 'YOUR_S3_BUCKET_NAME',
    Key: filename,
    Body: file,
    ContentType: 'application/pdf'
  };

  try {
    const data = await s3.upload(params).promise();
    console.log('File uploaded successfully to S3:', data.Location);
    return { success: true, url: data.Location };
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    return { success: false, url: null };
  }
};

const readPdfFromS3 = async (filename) => {
  const params = {
    Bucket: 'YOUR_S3_BUCKET_NAME',
    Key: filename
  };

  try {
    const data = await s3.getObject(params).promise();
    console.log('File read successfully from S3');
    return { success: true, data: data.Body };
  } catch (error) {
    console.error('Error reading file from S3:', error);
    return { success: false, data: null };
  }
};

module.exports = {
    uploadPdfToS3,
    readPdfFromS3,
}
