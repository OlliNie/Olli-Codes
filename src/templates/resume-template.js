import React, { PureComponent } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import PDFJS from 'pdfjs-dist';

class ResumeTemplate extends PureComponent {

  state = {
    page: 1
  }


  handleNextPage = () => {
    if (this.state.page < 2) {
      this.setState((state) => {
        return { page: state.page + 1 }
      })
    }
  }
  handlePrevPage = () => {
    if (this.state.page > 1) {
      this.setState((state) => {
        return { page: state.page - 1 }
      })
    }
  }
 
  componentDidMount() {
    const loadingTask = PDFJS.getDocument('/data/Resume.pdf');
    loadingTask.promise.then(
      function (pdf) {
        this.pdf = pdf;
        this.renderPage();
      }.bind(this)
    );
  }

  renderPage() {
    this.pdf.getPage(this.state.page).then(function (page) {
      const scale = 1.25;
      const viewport = page.getViewport(scale);

      // Prepare canvas using PDF page dimensions
      const canvas = document.getElementById('book-canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render PDF page into canvas context
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };

      page.render(renderContext);
    });
  }

  componentDidUpdate() {
    this.renderPage();
  }

  render() {
    return (
      <Layout>
        <h1>my resume</h1>

        <section css={
          {
            borderBottom: '1px solid #99CC00',
            borderTop: '1px solid #99CC00',
            padding: '10px 0 10px 0',
            marginBottom: '15px'
          }}>

          <section css={{ display: 'flex', justifyContent: 'space-around', width: '100vw' }}>
            <button onClick={this.handlePrevPage}>prev page</button>
            <button onClick={this.handleNextPage}>next page</button>
          </section>
        </section>

        <canvas css={{ width: '100vw' }} id='book-canvas'></canvas>
      </Layout>
    )
  }
}

export default ResumeTemplate;
// export const query = graphql`
//  query PostQuery($slug: String!) {
//      markdownRemark(fields: { slug: { eq: $slug } }) {
//        html
//        frontmatter {
//         title
//         description
//        }
//    }
// }`