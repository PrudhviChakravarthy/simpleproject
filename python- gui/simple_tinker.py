import tkinter as tk

root = tk.Tk()
root.title("Simple Window")

label = tk.Label(root, text="Hello, Tkinter!")
label.pack()

root.mainloop()
