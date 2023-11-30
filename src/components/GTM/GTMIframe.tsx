export function GTMIframe() {
    return(
        <>
    <iframe
      title="Google Tag Manager"
      src="https://www.googletagmanager.com/ns.html?id=YOUR-GTM-ID"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    ></iframe>
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PLL2K4ZQ"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
  </>
    )
}