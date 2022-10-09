function Home(){
  return (
    <Card
      txtcolor="black"
      header="Bad Bank"
      title="Welcome to the bank"
      text="Please create an account to deposit"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
