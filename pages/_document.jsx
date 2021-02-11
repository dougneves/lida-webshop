import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class LiDaDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

export default LiDaDocument;
