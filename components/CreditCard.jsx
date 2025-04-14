// components/CreditCard.js
import React, { useState } from 'react';
import styles from './CreditCard.module.css'; // Import the CSS module

// Define default props for easier use
const defaultProps = {
    bankName: "Bank Name",
    cardHolderName: "Person Name",
    cardNumberFull: "1111222233334444", // Full number for back
    cardNumberHidden: "XXXX XXXX XXXX 4444", // Masked for front
    expiryDate: "02/30",
    cvv: "304",
    cardType: "PLATINUM",
    logoText: "MasterCard" // Or pass an image component/URL as prop
};

const CreditCard = (props) => {
    // Use provided props or fall back to defaults
    const {
        bankName,
        cardHolderName,
        cardNumberFull,
        cardNumberHidden,
        expiryDate,
        cvv,
        cardType,
        logoText
    } = { ...defaultProps, ...props };

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    // Format the full card number with spaces for the back
    const formattedFullCardNumber = cardNumberFull
        .replace(/\s/g, '') // Remove existing spaces
        .replace(/(\d{4})/g, '$1 ') // Add space every 4 digits
        .trim(); // Remove trailing space

    return (
        // Removed the outer main-container div, let the parent component handle layout
        <div className={styles.cardContainer}>
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
                {/* Front Face */}
                <div className={styles.front}>
                    {/* Apply reflection move based on flip state */}
                    <div className={`${styles.reflection} ${isFlipped ? styles.move : ''}`}></div>
                    <div className={styles.type}>{cardType}</div>
                    <div className={styles.titleText}>{bankName}</div>
                    <div className={styles.details}>
                        <div className={styles.name}>{cardHolderName}</div>
                        <p className={styles.hiddenNumber}>{cardNumberHidden}</p>
                    </div>
                    <button onClick={handleFlip} className={styles.showBtn}>View Card Details</button>
                    <div className={styles.logo}>{logoText}</div>
                </div>

                {/* Back Face */}
                <div className={styles.back}>
                     {/* Apply reflection move based on flip state (opposite of front) */}
                     {/* Correction: Original JS toggled both the same way. Let's stick to that for visual parity. */}
                    <div className={`${styles.reflection} ${isFlipped ? styles.move : ''}`}></div>
                    {/* Black strip */}
                    <div style={{ height: '40px', background: 'black', marginTop: '20px', width: '100%' }}></div>
                    <div id={styles.chip} className={styles.chip}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {/* span 5 removed as per CSS */}
                    </div>
                    <div className={styles.titleText}>{bankName}</div>
                     {/* CVV Area */}
                     <div style={{ background: '#eee', padding: '5px 0', marginTop: '10px', marginRight: '15px', textAlign: 'right' }}>
                        <span className={styles.cvv} style={{ color: '#333', fontStyle: 'italic', marginRight: '10px' }}>{cvv}</span>
                     </div>
                    <div className={styles.details} style={{marginTop: '15px'}}> {/* Adjusted position */}
                        <div className={styles.name}>{cardHolderName}</div>
                        <p className={styles.hiddenNumber}>{formattedFullCardNumber}</p> {/* Use formatted full number */}
                        <div> {/* Wrap date */}
                            <span style={{fontSize: '0.7em', color: 'lightgrey'}}>VALID THRU</span>
                            <span className={styles.validDate}>{expiryDate}</span>
                        </div>
                    </div>
                    <button onClick={handleFlip} className={styles.hideBtn}>Hide Card Details</button>
                    <div className={styles.logo}>{logoText}</div>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;