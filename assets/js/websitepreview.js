


// ... existing imports ...
import styles from "./WebsitePreview.module.css"; // New CSS module for styling

// New function to get website preview URL
const getWebsitePreviewUrl = (code) => {
  // Logic to return the preview URL based on the code
  return `https://example.com/preview/${code}`; // Replace with actual logic
};

const WebsiteSection = () => {
  const websites = [
    { code: "WEBSITE1", previewUrl: "https://example.com/website1" },
    { code: "WEBSITE2", previewUrl: "https://example.com/website2" },
    // Add more websites as needed
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>SELECT YOUR WEBSITE TEMPLATE</h2>
      <div className={styles.websiteList}>
        {websites.map((website, index) => (
          <div key={index} className={styles.websiteContainer}>
            <div 
              className={styles.previewContainer}
              onMouseEnter={() => setPreviewingIndex(index)} // Set the index for preview
              onMouseLeave={() => setPreviewingIndex(null)} // Clear the index on mouse leave
            >
              {previewingIndex === index ? (
                <iframe
                  className={styles.preview}
                  src={getWebsitePreviewUrl(website.code)}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className={styles.thumbnail}>
                  <img 
                    src={`https://example.com/thumbnail/${website.code}`} // Thumbnail URL
                    alt={`Website ${website.code}`}
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.overlay}>
                    <span className={styles.previewButton}>Preview</span>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.websiteInfo}>
              <h3>WEBSITE CODE</h3>
              <div className={styles.websiteCode}>{website.code}</div>
              <p>Enhance your online presence with a tailored website.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteSection;