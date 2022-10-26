export default function VideoBanner() {
  return (
    <div>
      <video autoPlay loop muted>
        <source src="/oni-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
