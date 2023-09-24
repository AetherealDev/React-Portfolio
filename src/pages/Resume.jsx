import ResumeDoc from '../assets/Resume.pdf';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

export default function Resume() {

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();


    const pdfUrl = 'https://cdn1.frocdn.ch/rrhLKfaDXssAKUd.pdf';

    const handleDownload = () => {
        // Create an invisible anchor element and trigger a click event to start the download.
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'resume.pdf';
        link.target = '_blank'; // Opens the link in a new tab
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div style={{ width: '25%', height: '50%' }}>
            <Document file={ResumeDoc}>
                <Page pageNumber={1} />
            </Document>
            <button className="btn btn-primary" onClick={handleDownload}>Download Resume</button>
        </div>
    );
}
