from PIL import Image


def generate_thumbnail(input_path, output_path, size):
    with Image.open(input_path) as img:
        img.thumbnail(size, Image.ANTIALIAS)
        img.save(output_path)


input_image_path = "hero.png"
output_thumbnail_path = "hero-thumbnail.png"
thumbnail_size = (512, 512)

generate_thumbnail(input_image_path, output_thumbnail_path, thumbnail_size)
