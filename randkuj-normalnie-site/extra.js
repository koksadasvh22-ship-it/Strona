(function () {
  var CH = [
    ["Zasady gry: naturalnie, uczciwie, z szacunkiem", "Zanim przejdziemy do profili i wiadomości, ustalmy fundament.", ["rozumiesz, na czym polega randkowanie bez gierek i dlaczego opłaca się w dłuższej perspektywie", "umiesz oceniać postępy po własnych działaniach, a nie po cudzych reakcjach", "znasz swoje mocne strony i dwa obszary, nad którymi warto popracować najpierw"]],
    ["Głowa: stres, lęk przed odrzuceniem i pewność siebie", "Najczęstszą barierą nie jest brak wiedzy, tylko strach.", ["rozumiesz, skąd bierze się stres przed kontaktem z kimś, kto ci się podoba", "potrafisz oddzielać fakty od własnych interpretacji", "masz drabinę małych kroków, która pozwala oswajać strach stopniowo"]],
    ["Gdzie poznawać: aplikacje i życie offline", "Aplikacja randkowa to jedno z narzędzi, nie jedyne.", ["wybierzesz świadomie jedną lub dwie platformy", "ustawisz sobie limit czasu i budżetu", "będziesz wiedzieć, jak poznawać ludzi także poza aplikacjami"]],
    ["Profil, który mówi, kim jesteś", "Profil ma jedno główne zadanie: zachęcić drugą osobę do odpisania.", ["wybierzesz zdjęcia, które dobrze pokazują, jak wyglądasz i czym się interesujesz", "napiszesz opis według prostej formuły i zostawisz w nim haczyki do rozmowy", "unikniesz najczęstszych błędów w profilu"]],
    ["Pierwsza wiadomość: jak zacząć rozmowę", "Pierwsza wiadomość nie musi być genialna. Ma być łatwa do odpowiedzenia.", ["napiszesz pierwszą wiadomość odnoszącą się do konkretnego profilu", "znasz pięć wzorców otwarcia i umiesz je dostosować do własnego stylu", "wiesz, co zrobić, gdy nie dostaniesz odpowiedzi"]],
    ["Rozmowa i flirt: jak podtrzymać zainteresowanie", "Prawdziwa rozmowa zaczyna się wtedy, gdy oboje zadajecie pytania i dzielicie się szczegółami.", ["znasz trzy fazy rozmowy i wiesz, w której jesteś", "stosujesz technikę „odpowiedz, dodaj, zapytaj” zamiast przesłuchiwać", "flirtujesz w sposób, który jest wzajemny i szanuje granice"]],
    ["Zaproszenie na pierwszą randkę", "Zaproszenie to moment, w którym wiele osób się zatrzymuje. Jest na to prosty schemat.", ["wiesz, kiedy zaprosić", "masz formułę zaproszenia i trzy gotowe wzory do dopasowania", "umiesz zareagować na każdą odpowiedź, także „nie” i ciszę"]],
    ["Bezpieczeństwo: oszustwa i pierwsze spotkanie", "Kilka prostych zasad znacząco zmniejsza ryzyko dla ciebie i dla niej.", ["rozpoznasz najczęstsze sygnały oszustwa romantycznego", "wiesz, co zrobić, gdy podejrzewasz oszustwo, i gdzie to zgłosić", "zadbasz o bezpieczeństwo pierwszego spotkania, własne i jej"]],
    ["Pierwsza randka krok po kroku", "Pierwsza randka to rozmowa dwojga ludzi, którzy sprawdzają, czy chcą się spotkać ponownie.", ["wiesz, jak się przygotować i co zabrać ze sobą (także w głowie)", "umiesz prowadzić rozmowę, słuchać i zauważać sygnały drugiej osoby", "wiesz, jak zakończyć spotkanie i co zrobić po nim"]],
    ["Zgoda, granice i szacunek", "Rozdział krótki, ale ważny: dotyczy każdej sytuacji.", ["rozumiesz, czym jest zgoda i dlaczego liczy się wyraźne „tak”", "wiesz, jak pytać o zgodę w naturalny sposób", "umiesz przyjąć odmowę z klasą"]],
    ["Kiedy coś nie działa: rozwiązywanie problemów", "Brak dopasowań, cisza po wiadomości, odwołane spotkanie.", ["umiesz znaleźć etap, na którym „gubisz” kontakty", "masz konkretne poprawki dla najczęstszych problemów", "wiesz, kiedy zrobić przerwę"]],
    ["Plan na 30 dni i dalsze kroki", "Wiedza bez działania nie zmieni twojego życia.", ["masz plan działania na pierwsze 30 dni", "wiesz, jak śledzić postęp bez porównywania się z innymi", "wiesz, co robić po 30 dniach"]]
  ];
  var box = document.getElementById('mx-chap');
  if (box) {
    box.innerHTML = CH.map(function (c, i) {
      return '<details><summary><span class="mx-n">' + (i < 9 ? '0' : '') + (i + 1) + '</span><span class="mx-t">' + c[0] + '</span><span class="mx-plus" aria-hidden="true">+</span></summary><div class="mx-body"><p>' + c[1] + '</p><ul>' + c[2].map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div></details>';
    }).join('');
  }
  // przyklejony pasek zakupu: po minięciu hero, ukryty przy ofercie
  var sb = document.getElementById('mx-sticky'), hero = document.getElementById('top'), offer = document.getElementById('oferta');
  if (sb && hero && offer) {
    var a = sb.querySelector('a');
    var upd = function () {
      var past = window.scrollY > hero.offsetTop + hero.offsetHeight - 120;
      var r = offer.getBoundingClientRect();
      var inOffer = r.top < window.innerHeight * 0.7 && r.bottom > 0;
      var vis = past && !inOffer;
      sb.classList.toggle('show', vis);
      sb.setAttribute('aria-hidden', String(!vis));
      a.tabIndex = vis ? 0 : -1;
    };
    window.addEventListener('scroll', upd, { passive: true });
    upd();
  }
})();
