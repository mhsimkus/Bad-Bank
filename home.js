function Home(){
  return (
    <Card
      bgcolor="primary"  
      txtcolor="white"
      header="Bad Bank Home Page"
      title="Welcome to the Bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
