from moviepy.editor import VideoFileClip

# Open and analyze a video file
video = VideoFileClip("sample.mp4")
duration = video.duration
print(f"Video duration: {duration} seconds")
