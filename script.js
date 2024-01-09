    <script>
      let password = document.querySelector("#password");
      let button = document.querySelector("button");

      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lower = "abcdefghijklmnopqrstuvwxyz";
      const num = "0123456789";
      const char = "@#$%^&*";
      const length = 12;
      const allChar = upper + lower + num + char;
      let i = document.querySelector("i");

      button.addEventListener("click", () => {
        let pass = "";

        pass += upper[Math.floor(Math.random() * upper.length)];
        pass += lower[Math.floor(Math.random() * lower.length)];
        pass += num[Math.floor(Math.random() * num.length)];
        pass += char[Math.floor(Math.random() * char.length)];

        while (length > pass.length) {
          pass += allChar[Math.floor(Math.random() * allChar.length)];
        }
        password.value = pass;
      });
      i.addEventListener("click", () => {
        password.select();
        document.execCommand("copy");
      });
    </script>
