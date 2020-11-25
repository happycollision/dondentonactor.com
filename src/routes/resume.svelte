<style>
  .resume {
    max-width: 900px;
    margin: 0 auto 40px;
    font-size: 1em;
  }

  .resume:after {
    content: "";
    display: table;
    clear: both;
  }

  @media (max-width: 1099px) {
    .resume {
      font-size: 0.8em;
    }
  }

  @media (max-width: 699px) {
    .resume {
      font-size: 1em;
    }
  }

  h2 {
    @apply font-sans text-blue-500;
    @apply mt-4 mb-2;
    font-size: 1.5em;
    border-bottom: 1px solid #6b90b5;
    margin-right: -1em;
    font-weight: 400;
  }

  @media (min-width: 700px) {
    h2 {
      margin-right: 0;
    }
  }

  h3 {
    @apply font-sans;
    font-size: 1.3em;
    font-weight: bold;
  }

  .skills,
  .training {
    width: 100%;
  }

  @media (min-width: 700px) {
    .skills,
    .training {
      width: 49.15254%;
      float: left;
      margin-right: 1.69492%;
    }
  }

  .acting,
  .voice {
    width: 40%;
    float: left;
    margin: 1em 5% 0;
  }

  .acting h3,
  .voice h3 {
    margin-bottom: 0;
  }

  .acting ul,
  .voice ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @media (min-width: 700px) {
    .skills {
      width: 49.15254%;
      float: right;
      margin-right: 0;
    }
  }

  .stats dl {
    display: flex;
    justify-content: space-between;
  }

  .stats dl > * {
    flex-grow: 1;
  }

  .stats dt {
    text-align: right;
  }

  .stats dt::after {
    content: ": ";
    display: inline;
    margin-right: 0.5em;
  }

  .stats dd {
    text-align: left;
  }

  .credits {
    display: table;
    width: 100%;
  }

  .credits .row span {
    padding: 0.35em 0;
  }

  .credits .row span:nth-child(1) {
    width: 17%;
  }

  .credits .row span:nth-child(2) {
    width: 30%;
  }

  .credits .row span:nth-child(3) {
    width: 33%;
  }

  .credits .row span:nth-child(4) {
    width: 20%;
  }

  @media (max-width: 699px) {
    .credits .row {
      display: block;
      width: 50%;
      padding: 22px;
      float: left;
    }

    .credits .row:nth-of-type(odd) {
      clear: left;
    }

    .credits .row span {
      display: block;
      padding: 0;
      width: 100% !important;
    }

    .credits .row span:first-child {
      font-weight: 700;
      font-family: proxima-nova, sans-serif;
    }

    .credits .row span:nth-child(3) {
      font-weight: 700;
    }

    .credits .row span:nth-child(4) {
      font-style: italic;
    }

    .credits .row span:nth-child(4):before {
      content: "dir. ";
    }
  }

  @media (max-width: 399px) {
    .credits .row {
      width: 100%;
      float: none;
      padding: 0;
      margin-bottom: 2em;
    }

    .credits .row span {
      display: inline;
      white-space: nowrap;
      width: auto !important;
      margin-right: 0.75em;
    }

    .credits .row span:nth-child(1) {
      font-size: 1.25em;
      display: block;
      padding: 0;
      font-weight: 400;
    }

    .credits .row span:nth-child(3) {
      font-weight: 700;
    }
  }

  .explainer {
    text-align: right;
    color: gray;
  }

  .row {
    display: table-row;
    width: 100%;
  }

  .row span {
    display: table-cell;
  }
</style>

<div class="resume">
  <section class="stats">
    <dl>
      <dt>Height</dt>
      <dd>5'10"</dd>
      <dt>Weight</dt>
      <dd>165 lbs</dd>
      <dt>Voice</dt>
      <dd>Tenor</dd>
    </dl>
  </section>
  <section class="stage">
    <header>
      <h2>Stage</h2>
    </header>
    <div class="credits">
      <div class="row">
        <span>Harold Hill</span>
        <span>The Music Man</span>
        <span>Circa &#8217;21 Dinner Playhouse</span>
        <span>Jim Hesselman</span>
      </div>
      <div class="row">
        <span>Jean Valjean</span>
        <span>Les Misérables</span>
        <span>Circa &#8217;21 Dinner Playhouse</span>
        <span>Jerry Jay Cranford</span>
      </div>
      <div class="row">
        <span>Kenickie</span>
        <span>Grease</span>
        <span>Kansas City Starlight Theatre</span>
        <span>Philip Wm McKinley</span>
      </div>
      <div class="row">
        <span>Robbie Fay</span>
        <span>A Man of No Importance</span>
        <span>Post Playhouse</span>
        <span>Tom Ossowski</span>
      </div>
      <div class="row">
        <span>Jerry</span>
        <span>The Full Monty</span>
        <span>Circa &#8217;21 Dinner Playhouse</span>
        <span>Jamal McDonald</span>
      </div>
      <div class="row">
        <span>Jonny Warner</span>
        <span>Zombie Prom</span>
        <span>Mississippi Bend Players</span>
        <span>Philip Wm McKinley</span>
      </div>
      <div class="row">
        <span>Sky Masterson</span>
        <span>Guys &#038; Dolls</span>
        <span>Post Playhouse</span>
        <span>Tom Ossowski</span>
      </div>
      <div class="row">
        <span>Emmett</span>
        <span>Legally Blonde</span>
        <span>Post Playhouse</span>
        <span>Tom Ossowski</span>
      </div>
      <div class="row">
        <span>Mal Beineke</span>
        <span>The Addams Family</span>
        <span>Post Playhouse</span>
        <span>Dewayne Barrett</span>
      </div>
      <div class="row">
        <span>Lumiere</span>
        <span>Disney&#8217;s Beauty and the Beast</span>
        <span>Post Playhouse</span>
        <span>Jennifer Poarch</span>
      </div>
      <div class="row">
        <span>Bernard</span>
        <span>Boeing Boeing</span>
        <span>Wayside Theatre</span>
        <span>Warner Crocker</span>
      </div>
      <div class="row">
        <span>Joseph</span>
        <span>Joseph/Dreamcoat</span>
        <span>Circa &#8217;21 Dinner Playhouse</span>
        <span>Ann Nieman</span>
      </div>
      <div class="row">
        <span>Lt. Cable</span>
        <span>South Pacific</span>
        <span>Post Playhouse</span>
        <span>Tom Ossowski</span>
      </div>
      <div class="row">
        <span>Isaachar</span>
        <span>Joseph/Dreamcoat</span>
        <span>Marriott Theatre in Lincolnshire</span>
        <span>Marc Robin</span>
      </div>
      <div class="row">
        <span>Hank</span>
        <span>Hank Williams: Lost Highway</span>
        <span>Post Playhouse</span>
        <span>Tom Ossowski</span>
      </div>
      <div class="row">
        <span>Sir Bliant/Ens</span>
        <span>Camelot</span>
        <span>Drury Lane Theatre in Oakbrook</span>
        <span>Alan Souza</span>
      </div>
      <div class="row">
        <span>Jinx</span>
        <span>Plaid Tidings</span>
        <span>Circa &#8217;21 Dinner Playhouse</span>
        <span>Dimitri Toscas</span>
      </div>
      <div class="row">
        <span>Frankie</span>
        <span>Forever Plaid</span>
        <span>Post Playhouse</span>
        <span>Gavin Mayer</span>
      </div>
      <div class="row">
        <span>Ichabod Crane</span>
        <span>The Legend of Sleepy Hollow</span>
        <span>Filament Theatre Ensemble</span>
        <span>Scott Ferguson</span>
      </div>
      <div class="row">
        <span>Tammany</span>
        <span>Miracle/34th St. (Here&#8217;s Love)</span>
        <span>Wagon Wheel Theatre</span>
        <span>Scott Michaels</span>
      </div>
    </div>
  </section>
  <section class="screen">
    <header>
      <h2>Screen</h2>
    </header>
    <div class="credits">
      <div class="row">
        <span>W. Allan (lead)</span>
        <span>Sons &amp; Daughters of Thunder</span>
        <span>Fourth Wall Films</span>
        <span>Kelly Rundle*</span>
      </div>
      <div class="row">
        <span>Lead: improvised</span>
        <span>(Industrial)</span>
        <span>Kendall Hunt Publishing</span>
        <span>Jay Szalinski</span>
      </div>
    </div>
    <div class="explainer">* Emmy Award Nominated</div>
  </section>
  <section class="training">
    <header>
      <h2>Training</h2>
    </header>
    <div>BFA Music Theatre: Illinois Wesleyan University</div>
    <div class="voice">
      <h3>Voice:</h3>
      <ul>
        <li>Sandra DeAthos</li>
        <li>Dr. Lee Snook</li>
        <li>Jeff Miller</li>
      </ul>
    </div>
    <div class="acting">
      <h3>Acting:</h3>
      <ul>
        <li>Tom Ossowski</li>
        <li>Sandra Lindberg</li>
        <li>Roger Bechtel</li>
        <li>Nancy Loitz</li>
      </ul>
    </div>
  </section>
  <section class="skills">
    <header>
      <h2>Special Skills</h2>
    </header>
    <div>
      Guitar, Basic Rock Piano, Dialects
      <br />
      Fight Captain, Rapier and Dagger, Broadsword
    </div>
  </section>
</div>
