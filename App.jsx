export default function App() {
  return (
    <div style={{
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      padding: "0",
      margin: "0"
    }}>

      {/* HERO SECTION */}
      <div style={{
        textAlign: "center",
        padding: "80px 20px",
        background: "linear-gradient(to bottom, #000, #1a1a1a)"
      }}>

        <h1 style={{
          color: "#d4af37",
          fontSize: "42px",
          marginBottom: "10px"
        }}>
          DSB – Perfect Tailor
        </h1>

        <p style={{
          fontSize: "18px",
          color: "#ccc",
          maxWidth: "600px",
          margin: "auto"
        }}>
          Premium Tailoring Services in Ujjain.
          Luxury Stitching for Men with Perfect Fitting & Royal Style.
        </p>

        <a
          href="https://wa.me/919770917770"
          target="_blank"
        >
          <button style={{
            marginTop: "30px",
            padding: "15px 35px",
            backgroundColor: "#d4af37",
            color: "#000",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            Book on WhatsApp
          </button>
        </a>
      </div>

      {/* SERVICES */}
      <div style={{
        padding: "60px 20px",
        textAlign: "center"
      }}>

        <h2 style={{
          color: "#d4af37",
          fontSize: "32px",
          marginBottom: "40px"
        }}>
          Our Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>

          {[
            "Luxury Shirt Stitching",
            "Designer Pants",
            "Wedding Suits",
            "Custom Fitting",
            "Premium Alteration",
            "Classic Blazer Design"
          ].map((service, index) => (
            <div key={index} style={{
              backgroundColor: "#111",
              padding: "30px",
              borderRadius: "15px",
              border: "1px solid #d4af37"
            }}>
              <h3 style={{ color: "#d4af37" }}>
                {service}
              </h3>
            </div>
          ))}

        </div>
      </div>

      {/* ABOUT */}
      <div style={{
        padding: "60px 20px",
        backgroundColor: "#111",
        textAlign: "center"
      }}>

        <h2 style={{
          color: "#d4af37",
          marginBottom: "20px"
        }}>
          About Us
        </h2>

        <p style={{
          maxWidth: "700px",
          margin: "auto",
          color: "#ccc",
          lineHeight: "1.8"
        }}>
          DSB – Perfect Tailor is a premium tailoring brand from Ujjain.
          We provide luxury stitching with modern fitting and elegant designs.
          Our goal is to deliver royal style and premium quality to every customer.
        </p>
      </div>

      {/* CONTACT */}
      <div style={{
        padding: "60px 20px",
        textAlign: "center"
      }}>

        <h2 style={{
          color: "#d4af37",
          marginBottom: "20px"
        }}>
          Contact Us
        </h2>

        <p style={{ color: "#ccc" }}>
          📍 Ujjain, Madhya Pradesh
        </p>

        <p style={{ color: "#ccc" }}>
          📞 +91 9770917770
        </p>

        <a
          href="https://wa.me/919770917770"
          target="_blank"
        >
          <button style={{
            marginTop: "20px",
            padding: "15px 35px",
            backgroundColor: "#d4af37",
            color: "#000",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            Chat on WhatsApp
          </button>
        </a>

      </div>

    </div>
  );
}
