<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HamzNotDev - Digital Panel Store</title>
    <style>
        :root {
            --primary: #2c3e50;
            --whatsapp: #25D366;
            --whatsapp-hover: #128C7E;
            --danger: #e74c3c;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            color: #333;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            background: linear-gradient(135deg, var(--primary), #1a252f);
            color: white;
            padding: 25px 0;
            text-align: center;
            margin-bottom: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        h1 {
            margin: 0;
            font-size: 2.2rem;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
        }
        .brand {
            color: var(--whatsapp);
            font-weight: bold;
        }
        .tagline {
            font-style: italic;
            margin-top: 5px;
            opacity: 0.9;
        }
        .products {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
        }
        .product-card {
            background-color: white;
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            border: 1px solid #eee;
        }
        .product-card:hover {
            transform: translateY(-7px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        .product-title {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 12px;
            color: var(--primary);
            border-bottom: 2px solid #eee;
            padding-bottom: 8px;
        }
        .product-price {
            font-size: 1.2rem;
            color: var(--danger);
            font-weight: bold;
            margin: 15px 0;
        }
        .buy-btn {
            background-color: var(--whatsapp);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .buy-btn:hover {
            background-color: var(--whatsapp-hover);
            transform: scale(1.02);
        }
        .buy-btn i {
            margin-right: 10px;
            font-size: 1.2rem;
        }
        footer {
            text-align: center;
            margin-top: 50px;
            padding: 25px;
            background-color: var(--primary);
            color: white;
            border-radius: 8px;
            box-shadow: 0 -4px 6px rgba(0,0,0,0.1);
        }
        .whatsapp-float {
            position: fixed;
            width: 65px;
            height: 65px;
            bottom: 40px;
            right: 40px;
            background-color: var(--whatsapp);
            color: #FFF;
            border-radius: 50%;
            text-align: center;
            font-size: 35px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: all 0.3s;
        }
        .whatsapp-float:hover {
            transform: scale(1.1) rotate(10deg);
            background-color: var(--whatsapp-hover);
        }
        .contact-info {
            margin-top: 15px;
        }
        .contact-info a {
            color: var(--whatsapp);
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
        }
        .contact-info a:hover {
            text-decoration: underline;
        }
        @media (max-width: 768px) {
            .products {
                grid-template-columns: 1fr;
            }
            h1 {
                font-size: 1.8rem;
            }
            .whatsapp-float {
                width: 55px;
                height: 55px;
                bottom: 20px;
                right: 20px;
                font-size: 28px;
            }
            .product-card {
                padding: 20px;
            }
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="container">
        <header>
            <h1><span class="brand">HamzNotDev</span> Store</h1>
            <p class="tagline">Premium Digital Panels & Services</p>
        </header>
        
        <div class="products">
            <!-- Product 1 -->
            <div class="product-card">
                <div class="product-title">RESELLER PANEL</div>
                <div class="product-price">Rp 5.000</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20membeli%20RESELLER%20PANEL%20Rp%205.000', '_blank')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
            
            <!-- Product 2 -->
            <div class="product-card">
                <div class="product-title">ADMIN PANEL</div>
                <div class="product-price">Rp 7.000</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20membeli%20ADMIN%20PANEL%20Rp%207.000', '_blank')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
            
            <!-- Product 3 -->
            <div class="product-card">
                <div class="product-title">PT PANEL</div>
                <div class="product-price">Rp 10.000</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20membeli%20PT%20PANEL%20Rp%2010.000', '_blank')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
            
            <!-- Product 4 -->
            <div class="product-card">
                <div class="product-title">OWNER PANEL</div>
                <div class="product-price">Rp 15.000</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20membeli%20OWNER%20PANEL%20Rp%2015.000', '_blank')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
            
            <!-- Product 5 -->
            <div class="product-card">
                <div class="product-title">TANGAN KANAN PANEL</div>
                <div class="product-price">Rp 20.000</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20membeli%20TANGAN%20KANAN%20PANEL%20Rp%2020.000', '_blank')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
            
            <!-- Product 6 -->
            <div class="product-card">
                <div class="product-title">PANEL 1GB-UNLI</div>
                <div class="product-price">Rp 1.000 - 6.000</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20membeli%20PANEL%201GB-UNLI%20Rp%201.000-6.000', '_blank')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
            
            <!-- Product 7 -->
            <div class="product-card">
                <div class="product-title">MURBUG</div>
                <div class="product-price">Rp 5.000</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20membeli%20MURBUG%20Rp%205.000', '_blank')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
            
            <!-- Product 8 -->
            <div class="product-card">
                <div class="product-title">ADMIN MURBUG</div>
                <div class="product-price">Rp 8.000</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20membeli%20ADMIN%20MURBUG%20Rp%208.000', '_blank')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
            
            <!-- Product 9 -->
            <div class="product-card">
                <div class="product-title">JASBUG</div>
                <div class="product-price">Rp 2.000 / Nomor</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20membeli%20JASBUG%20Rp%202.000%20per%20nomor', '_blank')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
            
            <!-- Product 10 -->
            <div class="product-card">
                <div class="product-title">MURNOK</div>
                <div class="product-price">Rp 6.000</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20membeli%20MURNOK%20Rp%206.000', '_blank')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
            
            <!-- Product 11 -->
            <div class="product-card">
                <div class="product-title">NOKOS INDO</div>
                <div class="product-price">Rp 5.000</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20membeli%20NOKOS%20INDO%20Rp%205.000', '_blank')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
            
            <!-- Product 12 -->
            <div class="product-card">
                <div class="product-title">MURSUN</div>
                <div class="product-price">Rp 5.000</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20membeli%20MURSUN%20Rp%205.000', '_blank')">
                    <i class="fab fa-whatsapp"></i> Order Now
                </button>
            </div>
            
            <!-- Product 13 -->
            <div class="product-card">
                <div class="product-title">SUNTIK ALLSOSMED</div>
                <div class="product-price">Contact for Price</div>
                <button class="buy-btn" onclick="window.open('https://wa.me/6289517228651?text=Halo%20HamzNotDev,%20saya%20ingin%20bertanya%20tentang%20SUNTIK%20ALLSOSMED', '_blank')">
                    <i class="fab fa-whatsapp"></i> Inquire Now
                </button>
            </div>
        </div>
        
        <footer>
            <p>&copy; 2023 <span class="brand">HamzNotDev</span>. All rights reserved.</p>
            <div class="contact-info">
                WhatsApp: <a href="https://wa.me/6289517228651">+62 895-1722-8651</a>
            </div>
        </footer>
        
        <a href="https://wa.me/6289517228651" class="whatsapp-float" target="_blank" title="Contact HamzNotDev">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>
</body>
</html>
