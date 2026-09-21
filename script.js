function speakOnLoad(text) {
      const utterance = new SpeechSynthesisUtterance(text);

      function selectVoiceAndSpeak() {
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(v => 
          /female|zira|samantha|victoria|karen|fiona|hazel|google.*uk.*female/i.test(v.name)
        ) || voices[0];

        if (femaleVoice) {
          utterance.voice = femaleVoice;
        }
        utterance.pitch = 1.1;

        window.speechSynthesis.speak(utterance);
      }

      // Voice loading fix for Chrome/Edge/Safari
      if (window.speechSynthesis.getVoices().length > 0) {
        selectVoiceAndSpeak();
      } else {
        window.speechSynthesis.onvoiceschanged = selectVoiceAndSpeak;
      }
    }

    // Trigger speech as soon as the window finishes loading
    window.addEventListener('DOMContentLoaded', () => {
      speakOnLoad('Ae Up Clone Can Your Terrible At Writing I can do much better Then you just give up Mate you are never been blue in good at this writing stuff like Seriously Mate what your Writing Write Now Is A Bis No You absolute Twit You look like a 2 yearold');
    });

    // Workaround for Autoplay Restrictions:
    // If the browser blocks speech on load, play it on the very first user interaction anywhere on the screen.
    function enableAutoplayFallback() {
      const startSpeech = () => {
        if (!window.speechSynthesis.speaking) {
          speakOnLoad('Ae Up Clone Can Your Terrible At Writing I can do much better Then you just give up Mate you are never been blue in good at this writing stuff like Seriously Mate what your Writing Write Now Is A Bis No You absolute Twit You look like a 2 yearold');
        }
        document.removeEventListener('click', startSpeech);
        document.removeEventListener('keydown', startSpeech);
      };

      document.addEventListener('click', startSpeech);
      document.addEventListener('keydown', startSpeech);
    }

    enableAutoplayFallback();
