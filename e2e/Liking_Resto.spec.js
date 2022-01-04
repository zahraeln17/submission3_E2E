Feature('Liking Resto');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restos', ({I}) => {
  I.seeElement('#restos');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Data Kosong', '.restos');
});

Scenario('liking one resto', ({I}) => {
  I.see('Data Kosong', '.restos');

  I.amOnPage('/');
  // … kita akan mengisi uji coba berikutnya …
});