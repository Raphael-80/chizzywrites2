import { Helmet } from "react-helmet-async";

const SITE_NAME = "ChizzyWrites";
const SITE_URL = "https://chizzywrites.com";

export default function SEO({
    title,
    description,
    image = "/og-image.jpg",
    url,
    type = "website",
}) {
    const fullTitle = title
        ? `${title} | ${SITE_NAME}`
        : `${SITE_NAME} — Stories, Ideas & Perspectives`;

    return (
        <Helmet>
            <title>{fullTitle}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                name="robots"
                content="index, follow"
            />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${SITE_URL}${image}`} />
            <meta property="og:site_name" content={SITE_NAME} />

            {url && (
                <meta
                    property="og:url"
                    content={`${SITE_URL}${url}`}
                />
            )}

            {/* Twitter / X */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta
                name="twitter:description"
                content={description}
            />
            <meta
                name="twitter:image"
                content={`${SITE_URL}${image}`}
            />

            {/* Canonical */}
            {url && (
                <link
                    rel="canonical"
                    href={`${SITE_URL}${url}`}
                />
            )}
        </Helmet>
    );
}