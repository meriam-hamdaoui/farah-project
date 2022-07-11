import React from "react";
import { Tab, Tabs, Card } from "react-bootstrap";

const Objectifs = () => {
  return (
    <Card>
      <h3>Nos Objectifs</h3>
      <Tabs
        defaultActiveKey="intégration"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="intégration" title="Intégration">
          <h4>
            Intégrer des enfants autistes et à besoins spécifiques dans les
            Jardins d’Enfants et dans les écoles étatiques ou privés.{" "}
          </h4>
          <p>
            Accompagner les parents dans le processuse d'intégration par la
            coordination avec les délégués, les comités d'intégration et les
            psychologues scolaires dans diverses régions du pays
          </p>
        </Tab>
        <Tab eventKey="sensibilisation" title="Sensibilisation">
          <h4>
            Communiquer avec la société pour encourager à l'acceptation et le
            respect de la différence de nos enfants.
          </h4>
          <p>
            La sensibilisation permet à tous d'être outillés pour accueillir une
            personne autiste et elle contribue à permettre l'inclusion. Bien
            accueillir et accompagner une personne autiste dans son quotidien
            nécessite une bonne compréhension du fonctionnement de celle-ci.
          </p>
        </Tab>
      </Tabs>
    </Card>
  );
};

export default Objectifs;
