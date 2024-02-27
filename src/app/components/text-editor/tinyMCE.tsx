import { Editor } from '@tinymce/tinymce-react';

interface TinyMCEEditorProps {
  initialValue?: string;
  onChange?: (content: string) => void;
  height?: number;
}

const TinyMCEEditor: React.FC<TinyMCEEditorProps> = ({ initialValue = '', onChange = () => {}, height }) => {
  return (
    <Editor
      apiKey="1gxd2gfezd7uyz3ueouiab85g9dikfjzqg7vbapmzudji2rr"
      init={{
        plugins:
          'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
        toolbar:
          'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        height: height && height,
        setup: (editor) => {
          editor.on('change', () => {
            const content = editor.getContent();
            console.log('🚀 ~ editor.on ~ content:', content);
            onChange(content);
          });
        },
        ai_request: (request: any, respondWith: any) =>
          respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
      }}
      initialValue={initialValue}
    />
  );
};

export default TinyMCEEditor;
