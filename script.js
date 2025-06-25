<script>
  function goToTitle() {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("title-screen").classList.remove("hidden");
  }

  function goToIntro() {
    document.getElementById("title-screen").classList.add("hidden");
    document.getElementById("chapter1-intro").classList.remove("hidden");
  }

  function goToChapter(number) {
    if (number === 1) {
      document.getElementById("chapter1-intro").classList.add("hidden");
      document.getElementById("chapter1-q1").classList.remove("hidden");
    }
  }

  function goToQuestion(num) {
    if (num === 2) {
      document.getElementById("chapter1-q1").classList.add("hidden");
      document.getElementById("chapter1-q2").classList.remove("hidden");
    } else if (num === 3) {
      document.getElementById("chapter1-q2").classList.add("hidden");
      document.getElementById("chapter1-q3").classList.remove("hidden");
    }
  }

  function goToSummary() {
    document.getElementById("chapter1-q3").classList.add("hidden");
    document.getElementById("chapter1-summary").classList.remove("hidden");
  }

  function checkAnswer(button, isCorrect, questionId) {
    const feedback = document.getElementById(`feedback-${questionId}`);
    let message = "";
    let color = "";

    if (isCorrect) {
      color = "green";

      if (questionId === "q1") {
        message = "✅ 正解です！よく知っていますね✨ 褥瘡は、持続的な圧迫やずれによって皮膚やその下の組織が損傷する状態です。";
        document.getElementById("toQ2Button").classList.remove("hidden");
      } else if (questionId === "q2") {
        message = "✅ すばらしい！正解です🌟 ブレーデンスケールは、褥瘡のリスクを評価するために使われる信頼性の高いスケールです。";
        document.getElementById("toQ3Button").classList.remove("hidden");
      } else if (questionId === "q3") {
        message = "✅ パーフェクト！体位変換などで圧を分散させることが、褥瘡予防の基本です！";
        document.getElementById("toSummaryButton").classList.remove("hidden");
      }

    } else {
      color = "red";

      if (questionId === "q1") {
        message = "❌ 残念…でもチャレンジは大切です！褥瘡は“乾燥”や“アレルギー”ではなく、圧迫やずれが原因で起きる皮膚や組織の障害なんです。";
      } else if (questionId === "q2") {
        message = "❌ おしい！でも落ち込まないでくださいね😊 ブレーデンスケールが正解で、患者さんの活動レベルや栄養状態などから褥瘡のリスクを評価します。";
      } else if (questionId === "q3") {
        message = "❌ 惜しい！冷却や点滴よりもまず、体位変換による圧抜きが褥瘡予防の基本です。";
      }
    }

    feedback.textContent = message;
    feedback.style.color = color;
  }
</script>
