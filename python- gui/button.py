import tkinter as tk

def on_button_click():
    label.config(text="Button Clicked!")

root = tk.Tk()
root.title("Button Click Example")

button = tk.Button(root, text="Click Me", command=on_button_click)
button.pack()

label = tk.Label(root, text="")
label.pack()

root.mainloop()
