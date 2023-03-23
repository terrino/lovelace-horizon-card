import { css } from 'lit'

export default css`
  .horizon-card {
    --horizon-card-primary: var(--primary-text-color, #000000);
    --horizon-card-secondary: var(--secondary-text-color, #828282);
    --horizon-card-accent: #d7d7d7;

    --horizon-card-lines: var(--horizon-card-accent);
    --horizon-card-field-name-color: var(--horizon-card-secondary);
    --horizon-card-field-value-color: var(--horizon-card-primary);

    --horizon-card-stop-invisible: rgb(0,0,0,0);
    --horizon-card-stop-sun-color: #f9d05e;
    --horizon-card-stop-dawn-color: #393b78;
    --horizon-card-stop-day-color: #8ebeeb;
    --horizon-card-stop-dusk-color: #393b78;

    padding: 0.5rem;
    font-family: var(--primary-font-family);
  }

  .horizon-card.horizon-card-dark {
    --horizon-card-primary: #ffffff;
    --horizon-card-secondary: #828282;
    --horizon-card-accent: #464646;
  }

  .horizon-card-field-row {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  }

  .horizon-card-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .horizon-card-field-name {
    color: var(--horizon-card-field-name-color);
  }

  .horizon-card-field-value {
    color: var(--horizon-card-field-value-color);
    font-size: 1.3em;
    line-height: 1.1em;
  }

  .horizon-card-header {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    margin-bottom: -1rem;
  }

  .horizon-card-header .horizon-card-text-container {
    font-size: 1.3rem;
  }

  .horizon-card-footer {
    margin-bottom: 1rem;
  }

  .horizon-card-title {
    margin: 1rem 1rem 2rem 1rem;
    font-size: 1.5rem;
    color: var(--horizon-card-primary);
  }

  .horizon-card-graph {
    shape-rendering="geometricPrecision";
    margin: 1rem 0 1rem 0;
  }

  .horizon-card-graph .sunInitialStop {
    stop-color: var(--horizon-card-stop-sun-color);
  }

  .horizon-card-graph .sunMiddleStop {
    stop-color: var(--horizon-card-stop-sun-color);
  }

  .horizon-card-graph .sunEndStop {
    stop-color: var(--horizon-card-stop-invisible);
  }

  .horizon-card-graph .dawnInitialStop {
    stop-color: var(--horizon-card-stop-dawn-color);
  }

  .horizon-card-graph .dawnMiddleStop {
    stop-color: var(--horizon-card-stop-dawn-color);
  }

  .horizon-card-graph .dawnEndStop {
    stop-color: var(--horizon-card-stop-invisible);
  }

  .horizon-card-graph .dayInitialStop {
    stop-color: var(--horizon-card-stop-day-color);
  }

  .horizon-card-graph .dayMiddleStop {
    stop-color: var(--horizon-card-stop-day-color);
  }

  .horizon-card-graph .dayEndStop {
    stop-color: var(--horizon-card-stop-invisible);
  }

  .horizon-card-graph .duskInitialStop {
    stop-color: var(--horizon-card-stop-dusk-color);
  }

  .horizon-card-graph .duskMiddleStop {
    stop-color: var(--horizon-card-stop-dusk-color);
  }

  .horizon-card-graph .duskEndStop {
    stop-color: var(--horizon-card-stop-invisible);
  }

  .card-config ul {
    list-style: none;
    padding: 0 0 0 1.5rem;
  }

  .card-config li {
    padding: 0.5rem 0;
  }
`
