import React from 'react'

function YoutubeEmbed({title, videoId}) {
  return (
    <div className="w-full h-96">
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
        />
    </div>
  )
}

export default YoutubeEmbed;