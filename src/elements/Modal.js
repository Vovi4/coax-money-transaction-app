// import React, { useState } from 'react';
// import 'antd/dist/antd.css';
// import { Modal, Button } from 'antd';

// const SignUpModal = (props) => {

//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//         <>
//           {props.children}
//         </>
//       </Modal>
//     </>
//   );
// };

// export default SignUpModal;



import React, {setState} from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

const Modal = () => {

const [loading, setLoading] = setState({loading: false})
const [visible, setVisible] = setState({visible: false})
  

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  
    // const { visible, loading } = this.state;
    return (
      <>
        <Modal
          visible={visible}
          title="Sign Up"
          onOk={handleOk}
        
          footer={[
            <Button type="primary" htmlType="submit" className="login-form-button">
          Sign in
        </Button>
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }

