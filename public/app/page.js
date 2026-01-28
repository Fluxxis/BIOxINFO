import "./globals.css";

export default function Page() {
  return (
    <div className="iframeWrap">
      <iframe
        className="siteFrame"
        src="/site/index.html"
        title="Bio Cover"
        allow="autoplay; fullscreen; clipboard-read; clipboard-write"
      />
    </div>
  );
}
