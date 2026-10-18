import { useState } from "react"

export const QRCode = () => {
    
    const [img,setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData,setQrData] = useState("");
    const [qrSize,setQRSize] = useState("");
    
    async function generateQR() 
    {
        setLoading(true);
        try
        {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImage(url);
        }
        catch(error)
        {
            console.error("Error in Generating QR code",error)
        }
        finally
        {
            setLoading(false);
        }
    }
  
    function downloadQR(){
        fetch(img)
        .then((response) => response.blob())
        .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "QrCode.jpg";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
    }


    return (
    <div className="app-container">
        <h1>QR Code Generator</h1>
        {loading && <p>Please wait....</p>}
        {img && <img src={img} alt="No Image Available" className="qrImage"/>}
        <div className="main" >
            <label htmlFor="dataInput" className="input-label" >Data for QR code</label>
            <input type="text" id="dataInput" value={qrData} onChange={(event) => setQrData(event.target.value)} placeholder="Enter data for QrCode "/>
            <label htmlFor="sizeInput" className="input-label">Image Size(e.g.150)</label>
            <input type="text" id="dataInput" value={qrSize} onChange={(event) => setQRSize(event.target.value)} placeholder="Enter Size for QrCode "/>
            <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR Code</button>
            <button className="download-button" onClick={downloadQR}>Download QR Code</button>
        </div>
        <p>Developed By Kaarthik</p>
    </div>
  )
}
