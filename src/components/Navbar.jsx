import { Link } from "react-router-dom";

const navLinks = [
    {
        href: "/",
        label: "Inicio",
        target: undefined
    },
    {
        href: "https://gabo-demo-portfolio.pages.dev/",
        label: "Sobre mí",
        target: "_blank"
    },
    {
        href: "https://www.linkedin.com/services/page/a280b73315b2861026/",
        label: "Mis servicios",
        target: "_blank"
    },
    {
        href: "/docs",
        label: "Documentación",
        target: undefined
    },
    {
        href: "https://github.com/GaboGabito05/sistema-crm-compina-server",
        label: "API RESTful",
        target: "_blank"
    }
];

const actionLinks = [
    {
        href: "https://github.com/GaboGabito05/sistema-crm-compina-client",
        label: "Repositorio",
        className: "text-sm font-medium bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-800 transition-all hover:scale-105 shadow-sm",
        target: "_blank"
    },
    {
        href: "https://astro-compipro-page.pages.dev/",
        label: "Visitar Web",
        className: "text-sm font-medium bg-amber-300 rounded-xl px-6 py-3 hover:bg-amber-400 transition-all hover:scale-105 shadow-sm",
        target: "_blank"
    }
];

function Navbar() {
    return (
        <nav className="top-0 left-0 right-0 backdrop-blur-lg bg-white/70 border-b border-gray-100 shadow-sm">
            <div className="flex justify-between items-center p-2 max-w-7xl mx-auto">
                <div className="flex items-center gap-8">
                    <img className="w-20 h-auto hover:scale-105 transition-transform" src="/images/logo.webp" alt="logo" />                
                    <ul className="flex gap-8 text-sm font-medium bg-white/50 backdrop-blur-sm px-8 py-3 rounded-full shadow-sm">
                        {navLinks.map(({ href, label, target }) => (
                            <li key={label}>
                                {href.startsWith("/") ? (
                                    <Link
                                        to={href}
                                        className="hover:text-amber-600 transition-all relative group"
                                    >
                                        {label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
                                    </Link>
                                ) : (
                                    <a
                                        href={href}
                                        target={target}
                                        className="hover:text-amber-600 transition-all relative group"
                                        rel={target === "_blank" ? "noopener noreferrer" : undefined}
                                    >
                                        {label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-4">
                    {actionLinks.map(({ href, label, className, target }) => (
                        <a
                            key={label}
                            href={href}
                            className={className}
                            target={target}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;