import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithGoogle, useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
// import auth from '../../../firebase.init';
// import google from '../../../images/google.png';
import { toast } from 'react-toastify';
// import UseToken from '../../Hooks/UseToken';
// import Loading from '../../Shared/Loading/Loading';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import MainFooter from '../Footer/MainFooter'
import MainNavber from '../Navber/MainNavber'

function MainLogin() {
  const [showpass, setShowpass] = useState(false);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit, getValues } = useForm();

  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
      auth
  );

  // const [token] = UseToken(user || gUser);
  const EmailRef = useRef('');
  const navigate = useNavigate()
  let location = useLocation();
  let signInerror;
  let from = location.state?.from?.pathname || "/";

  // useEffect(() => {
  //     if (user || gUser) {
  //         navigate(from, { replace: true });
  //     }
  // }, [token, from, navigate])


  if (gLoading || loading) {
      return <Loading />
  }

  if (gError || error) {
      signInerror = <p className="text-red"><small>{error?.message || gError?.message}</small></p>
  }

  const onSubmit = data => {
      signInWithEmailAndPassword(data.email, data.password)
      console.log(data.email);
      console.log(data.password);
  }

  const hendelForgetPssword = async () => {
      // const email = EmailRef.current.value;
      const email = getValues("email");
      console.log(email);
      if (email) {
          await sendPasswordResetEmail(email);
          toast("Email Sent");
      }
      else {
          toast('Enter your Email')
      }

  }
  return (
    <>
      <MainNavber/>
      <div style={{ background:"#eef0f0" }} className="py-5">
        <Container>
          <Row>
            <Col sm={12} md={6} className="m-auto">
              <div className="Contact_section py-5 rounded shadow p-5 bg-body rounded">
                <div className="Contact_text d-flex justify-content-around mb-5 pb-4 border-bottom">
                  <div>
                    <NavLink to="/login" className='fw-bolder fs-5' style={{ color:"#333333" }}>LOGIN</NavLink>
                  </div>
                  <div>
                    <NavLink to="/register" className='fw-bolder fs-5' style={{ color:"#333333" }}>REGISTER</NavLink>
                  </div>
                </div>
                <Form className="" onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group
                    className="mb-4"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="fw-normal fs-6">
                    Username or email address *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </Form.Group>
                  {/* <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div> */}

                  <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label className='fw-normal fs-6'>Password *</Form.Label>
                  <Form.Control type="password" placeholder="Enter your email Password" />
                  </Form.Group>
                  

                  <Form.Group className="mb-4" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>

                  

                
                  <div className="w-25 m-auto text-center">
                    <Button
                      className="contact_btn fw-bolder"
                      type="submit"
                      style={{ background: " #c39f57" }}
                    >
                      SIGN IN
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    <MainFooter/>
    </>
  )
}

export default MainLogin