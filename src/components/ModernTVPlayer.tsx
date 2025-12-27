import { useRef, useEffect } from "react";
import parkourVideo from "@/assets/max-danger-parkour.mp4";

const ModernTVPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative inline-block">
      {/* TV Frame - Modern Samsung/LG style */}
      <div className="relative bg-gradient-to-b from-zinc-800 via-zinc-900 to-black rounded-[3px] p-[3px] shadow-[0_25px_80px_-20px_rgba(0,0,0,0.8)]">
        {/* Inner bezel */}
        <div className="relative bg-black rounded-[2px] overflow-hidden">
          {/* Screen bezel - ultra thin */}
          <div className="relative p-[2px] bg-gradient-to-b from-zinc-700 to-zinc-900">
            {/* Actual screen */}
            <div className="relative bg-black overflow-hidden">
              <video
                ref={videoRef}
                src={parkourVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              />
              
              {/* Screen reflection/gloss effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-transparent" />
              
              {/* Subtle vignette */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.3)]" />
            </div>
          </div>
          
          {/* Bottom chin with brand logo area */}
          <div className="h-3 bg-gradient-to-b from-zinc-900 to-zinc-950 flex items-center justify-center">
            <div className="w-8 h-[2px] rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
          </div>
        </div>
      </div>
      
      {/* TV Stand */}
      <div className="flex justify-center -mt-[1px]">
        {/* Stand neck */}
        <div className="w-16 h-6 bg-gradient-to-b from-zinc-800 to-zinc-900 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-zinc-700" />
        </div>
      </div>
      {/* Stand base */}
      <div className="flex justify-center -mt-[1px]">
        <div className="w-32 h-2 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-b-sm shadow-lg">
          <div className="absolute inset-x-0 top-0 h-px bg-zinc-700/50" />
        </div>
      </div>
      
      {/* Ambient glow behind TV */}
      <div className="absolute -inset-4 -z-10 bg-primary/10 blur-2xl rounded-full opacity-50" />
    </div>
  );
};

export default ModernTVPlayer;
