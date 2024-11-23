// pages/index.js
import Header from './components/Header';
import Summary from './components/Summary';
import Project from './components/Project';
import ContactForm from './components/ContactForm';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Summary />
                <Project />
                <ContactForm />
            </main>
        </>
    );
}
