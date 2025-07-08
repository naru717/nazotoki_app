<script>
  let collectedDigits = [];

  function playPochi() {
    const sound = document.getElementById("pochiSound");
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(e => console.warn("効果音の再生に失敗しました", e));
    }
  }

  // ✅ 追加：吹き出しを非表示にする関数
  function hideToseikunMessage() {
    const commentBox = document.getElementById("toseikun-comment");
    commentBox.classList.add("hidden");
    document.getElementById("toseikun-text").innerHTML = "";
  }

  function startIntro() {
    const name = document.getElementById("userName").value;
    const dept = document.getElementById("userDepartment").value;
    const job = document.getElementById("userProfession").value;
    if (!name || !dept || !job) {
      alert("すべて入力してください");
      return;
    }
    goTo("intro");
    const bgm = document.getElementById("bgm");
    if (bgm.paused) {
      bgm.currentTime = 0;
      bgm.play().catch(e => console.warn("BGM再生失敗", e));
    }
  }

  // ✅ 修正：画面切り替え時に吹き出しリセット
  function goTo(id) {
    document.querySelectorAll('.container').forEach(div => div.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    hideToseikunMessage(); // ✅ 毎回非表示にする
  }

  function goToNext(currentId) {
    const nextId = 'q' + (parseInt(currentId.replace('q', '')) + 1);
    goTo(nextId);
  }

  function showToseikunMessage(message) {
    const commentBox = document.getElementById("toseikun-comment");
    const commentText = document.getElementById("toseikun-text");
    commentText.innerHTML = message;
    commentBox.classList.remove("hidden");
  }

  function nextWithAnswer(digit, questionId) {
    const feedback = document.createElement("p");
    feedback.className = "feedback";
    if (digit > 0) {
      collectedDigits.push(digit);
      feedback.innerHTML = `✅ 正解！この調査の暗号は「<strong>${digit}</strong>」だよ。最後に使うから覚えておこう！`;
      feedback.style.color = "green";

      if (questionId === 'q1') {
        showToseikunMessage(`正解！<br>そうなんだ、専門看護師には以下の役割があるんだよ。<br><br>
        🛠 <strong>専門看護師の6つの役割</strong><br>
        ① 臨床実践…高度な看護ケアを提供<br>
        ② 相談支援…看護師や多職種の相談役<br>
        ③ 調整…チーム医療の連携を調整<br>
        ④ 倫理調整…治療方針などの難しい判断に関与<br>
        ⑤ 教育…スタッフ指導・勉強会の企画など<br>
        ⑥ 研究…看護の質向上のための実践研究`);
      } else if (questionId === 'q2') {
        showToseikunMessage(`正解！<br>そうなんだ。認定看護師は…<br><br>
        🔹 特定の看護分野で「実践力」を高めたスペシャリスト<br>
        🔹 経験を積んだ看護師が、認定教育課程を修了し、試験に合格して認定されるんだ<br>
        🔹 現場で即戦力として「看護の質向上」を支える存在なんだって`);
      } else if (questionId === 'q3') {
        showToseikunMessage(`正解！<br>そうなんだ、専門・認定看護師にはケアの方法に不安があるとき連絡するといいよ。<br><br>
        例えば…<br>
        ・専門的な処置・観察のコツを知りたいとき<br>
        ・新人にどう教えればいいか悩んだとき<br>
        ・ご家族への説明が難しいと感じたとき<br>
        などでも相談に乗ってくれるんだ`);
      }
    } else {
      feedback.innerHTML = `❌ ちょっと違うけど、次の調査もがんばって！`;
      feedback.style.color = "#d84315";
    }

    const current = document.querySelector('.container:not(.hidden)');
    current.appendChild(feedback);
    const nextBtn = current.querySelector('.next-btn');
    if (nextBtn) nextBtn.classList.remove('hidden');
  }
</script>
