import "../../css/components/form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
export const CheckoutForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          phone: "",
          address: "",
          zipCode: "",
          city: "",
          country: "",
          payment: "",
        }}
        validate={(values) => {
          const errors = {};

          for (let key in values) {
            if (!values[key]) {
              errors[key] = "Empty field!";
            }
          }

          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Wrong format";
          }

          if (!/^\d{10}$/.test(values.phone)) {
            errors.phone = "Wrong format";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values }) => (
          <Form className="form__container">
            <h1 className="title">Checkout</h1>
            <div className="form form__billing">
              <h2 className="subtitle">Billing Details</h2>
              <div className="column">
                <div className="form__input">
                  <div className="input__text">
                    <label htmlFor="username">Name</label>
                    <ErrorMessage
                      name="username"
                      className="message-error"
                      component="p"
                    />
                  </div>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Alexei Ward"
                  />
                </div>
                <div className="form__input">
                  <div className="input__text">
                    <label htmlFor="email">Email</label>
                    <ErrorMessage
                      name="email"
                      className="message-error"
                      component="p"
                    />
                  </div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="alexei@gmail.com"
                  />
                </div>
              </div>
              <div className="form__input">
                <div className="input__text">
                  <label htmlFor="phone">Phone Number</label>
                  <ErrorMessage
                    name="phone"
                    className="message-error"
                    component="p"
                  />
                </div>
                <Field type="tel" name="phone" placeholder="+1 202-555-0136" />
              </div>
            </div>

            <div className="form">
              <h2 className="subtitle">Shipping info</h2>
              <div className="form__shipping">
                <div className="form__input form__input--address">
                  <div className="input__text">
                    <label htmlFor="address">Address</label>
                    <ErrorMessage
                      name="address"
                      className="message-error"
                      component="p"
                    />
                  </div>
                  <Field
                    type="text"
                    name="address"
                    placeholder="1137 Williams Avenue"
                  />
                </div>
                <div className="form__input">
                  <div className="input__text">
                    <label htmlFor="zipCode">ZIP Code</label>
                    <ErrorMessage
                      name="zipCode"
                      className="message-error"
                      component="p"
                    />
                  </div>
                  <Field type="text" name="zipCode" placeholder="10001" />
                </div>
                <div className="form__input">
                  <div className="input__text">
                    <label htmlFor="city">City</label>
                    <ErrorMessage
                      name="city"
                      className="message-error"
                      component="p"
                    />
                  </div>
                  <Field type="text" name="city" placeholder="New York City" />
                </div>
                <div className="form__input">
                  <div className="input__text">
                    <label htmlFor="country">Country</label>
                    <ErrorMessage
                      name="country"
                      className="message-error"
                      component="p"
                    />
                  </div>
                  <Field
                    type="text"
                    name="country"
                    placeholder="United States"
                  />
                </div>
              </div>
            </div>

            <div className="form">
              <h2 className="subtitle">Payment Details</h2>
              <div className="form__payment">
                <p className="text">Payment Method</p>
                <div className="form__payment-option">
                  <Field
                    className="form__radio"
                    type="radio"
                    name="payment"
                    value="creditCard"
                  />
                  <label className="form__label" htmlFor="paymentChoice1">
                    e-Money
                  </label>
                </div>
                <div className="form__payment-option form__payment-option--2">
                  <Field
                    className="form__radio"
                    type="radio"
                    name="payment"
                    value="cash"
                  />
                  <label className="form__label" htmlFor="paymentChoice2">
                    Cash on Delivery
                  </label>
                </div>
              </div>
              {values.payment === "cash" && (
                <div className="form__content">
                  <img
                    src="/src/assets/checkout/icon-cash-on-delivery.svg"
                    alt="cash"
                  />
                  <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives 
                  at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
              )}
              {values.payment === "creditCard" && (
                <div className="form__payment-creditCard">
                  <div className="form__input">
                    <label htmlFor="paymentNumber">e-Money Number</label>
                    <Field type="text" name="paymentNumber" placeholder="238521993" />
                  </div>
                  <div className="form__input">
                    <label htmlFor="paymentPin">e-Money PIN</label>
                    <Field type="text" name="paymentPin" placeholder="6891" />
                  </div>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
