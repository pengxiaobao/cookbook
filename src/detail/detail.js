/**
 * @file index
 * @author anima
 */
// import 'antd-mobile/lib/white-space/style';
// import WhiteSpace from 'antd-mobile/lib/white-space';
// import 'antd-mobile/lib/wing-blank/style';
// import WingBlank from 'antd-mobile/lib/wing-blank';
// import 'antd-mobile/lib/flex/style';
// import Flex from 'antd-mobile/lib/flex';
// import 'antd-mobile/lib/carousel/style';
// import Carousel from 'antd-mobile/lib/carousel';
import '../common/base';
import './detail.less';
import './detail.html';

// const App = React.createClass({
//   getInitialState() {
//     return {
//       current: 2,
//     };
//   },

//   beforeSlide(from, to) {
//     console.log(`slide from ${from} to ${to}`);
//   },

//   slideTo(index) {
//     console.log('slide to', index);
//   },

//   render() {
//     const settings = {
//       dots: true,
//       autoplay: true,
//       infinite: true,
//       selectedIndex: this.state.current,
//       beforeChange: this.beforeSlide,
//       afterChange: this.slideTo,
//     };
//     return (
//       <div>
//         <div className="pagination-container" >
//           <WingBlank>
//             <Carousel {...settings}>
//               <Flex
//                 justify="center"
//                 className="flex-container-justify"
//               >
//                 <h3>Carousel 1</h3>
//               </Flex>
//               <Flex
//                 justify="center"
//                 className="flex-container-justify"
//               >
//                 <h3>Carousel 2</h3>
//               </Flex>
//               <Flex
//                 justify="center"
//                 className="flex-container-justify"
//               >
//                 <h3>Carousel 3</h3>
//               </Flex>
//             </Carousel>
//           </WingBlank>
//           <WhiteSpace size="lg" />
//         </div>
//       </div>
//     );
//   },
// });

// ReactDOM.render(<App />, document.getElementById("main"));