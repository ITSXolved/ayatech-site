from PIL import Image
import sys

def make_white_transparent(image_path, output_path, tolerance=240):
    try:
        img = Image.open(image_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # If all RGB values are above the tolerance, consider it white
            if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
                # Keep color, set alpha to 0
                newData.append((item[0], item[1], item[2], 0))
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully processed {image_path} and saved to {output_path}")
    except Exception as e:
        print(f"Error processing image: {e}")
        sys.exit(1)

if __name__ == "__main__":
    make_white_transparent("c:/Users/ASUS/Downloads/ayatech-site-main/ayatech-site-main/web/public/logo_v3.png", "c:/Users/ASUS/Downloads/ayatech-site-main/ayatech-site-main/web/public/logo_transparent.png", 250)
