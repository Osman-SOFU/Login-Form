describe("Login Form Testleri", () => {
  // Başarılı form senaryosu
  describe("Başarılı form doldurulduğunda success sayfasına yönlenme", () => {
    it("Doğru bilgilerle formu doldurup success sayfasına gidilmeli", () => {
      cy.visit("http://localhost:3000/");
      cy.get('input[name="email"]').type("test@example.com"); // Email inputuna doğru değer giriliyor
      cy.get('input[name="password"]').type("Password@123"); // Şifre inputuna doğru değer giriliyor
      cy.get('input[name="terms"]').check(); // "Terms" kutusu işaretleniyor
      cy.get('button[type="submit"]').click(); // Submit butonuna tıklanıyor

      // Yönlendirme ve içerik doğrulaması
      cy.get(".success-message").should("be.visible"); // class kullanarak
      cy.get("p").should("contain", "Giriş Başarılı"); // Başlık ile kontrol
      // Success mesajının görünür olması bekleniyor
    });
  });

  // Hatalı form senaryoları
  describe("Hatalı form senaryoları", () => {
    it("Yanlış email girdiğimde hata mesajı görünüyor ve buton disabled", () => {
      cy.visit("http://localhost:3000/");
      cy.get('input[name="email"]').type("yanlisemail"); // Geçersiz email giriliyor
      cy.get(".invalid-feedback").should(
        "contain",
        "Please enter a valid email address"
      ); // Hata mesajı doğrulanıyor
      cy.get('button[type="submit"]').should("be.disabled"); // Submit butonunun disabled olduğu kontrol ediliyor
    });

    it("Yanlış email ve zayıf şifre ile hata mesajları görünüyor ve buton disabled", () => {
      cy.visit("http://localhost:3000/");
      cy.get('input[name="email"]').type("yanlisemail"); // Geçersiz email
      cy.get('input[name="password"]').type("123"); // Zayıf şifre
      cy.get(".invalid-feedback").should(
        "contain",
        "Please enter a valid email address"
      ); // Email hatası
      cy.get(".invalid-feedback").should(
        "contain",
        "Password must be strong password"
      ); // Şifre hatası
      cy.get('button[type="submit"]').should("be.disabled"); // Submit butonunun disabled olduğu kontrol ediliyor
    });

    it("Doğru email ve şifre girildi ama kurallar kabul edilmedi, buton disabled", () => {
      cy.visit("http://localhost:3000/");
      cy.get('input[name="email"]').type("test@example.com"); // Doğru email
      cy.get('input[name="password"]').type("Password@123"); // Doğru şifre
      cy.get('input[name="terms"]').should("not.be.checked"); // "Terms" kutusu işaretlenmemiş
      cy.get('button[type="submit"]').should("be.disabled"); // Submit butonunun disabled olduğu kontrol ediliyor
    });
  });
});
