export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-line py-12" role="contentinfo">
            <div className="section-container !py-0 flex flex-col items-center text-center">
                <div className="flex gap-8 mb-6">
                    <a
                        href="https://github.com/VigneshEilik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium uppercase tracking-widest text-muted hover:text-accent transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/vignesh2k02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium uppercase tracking-widest text-muted hover:text-accent transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="tel:+917695824978"
                        className="text-xs font-medium uppercase tracking-widest text-muted hover:text-accent transition-colors"
                    >
                        Mobile
                    </a>
                </div>

                <p className="text-xs text-muted/60 tracking-widest uppercase">
                    &bull; SLOW IS SMOOTH &bull; SMOOTH IS FAST &bull;
                </p>
            </div>
        </footer>
    );
}
