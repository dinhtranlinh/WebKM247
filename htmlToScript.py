def convert_html_to_js_string(input_file, output_file):
    # Function to convert HTML code to a JavaScript string
    def convert_to_js_string(html_code):
        # Perform necessary replacements to convert HTML code to a JavaScript string
        js_string = html_code.replace('\\', '\\\\').replace("'", "\\'").replace('"', '\\"').replace('\n', '\\n')
        return js_string

    # Read content from input.txt
    with open(input_file, 'r', encoding='utf-8') as file:
        html_code = file.read()

    # Convert HTML to JavaScript string
    js_string = convert_to_js_string(html_code)

    # Write the result to output.txt
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(js_string)

    print("Result has been written to", output_file)

# Replace 'input.txt' and 'output.txt' with the file names you want to use
convert_html_to_js_string('input.txt', 'output.txt')
