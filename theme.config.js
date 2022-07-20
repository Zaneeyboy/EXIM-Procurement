export default {
  github: 'https://github.com/Zaneeyboy/EXIM-Procurement',
  docsRepositoryBase:
    'https://github.com/Zaneeyboy/EXIM-Procurement/tree/main/pages',

  titleSuffix: 'EXIM',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">EXIM BANK</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Procurement Process
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta property="og:title" content="EXIM BANK : Procurement Process" />
      <title>EXIM Procurement Docs</title>
      <meta
        name="description"
        content="EXIM BANK : Procurement Process Documentation"
      />
      <meta
        name="og:description"
        content="EXIM BANK : Procurement Process Documentation"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="EXIM BANK Procurement Process"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: (
    <>{new Date().getFullYear()} © Export Import Bank of Trinidad and Tobago</>
  ),
  unstable_faviconGlyph: '👋',
}
