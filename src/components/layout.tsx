const Layout = () => {
    return (
      <div className="grid grid-cols-1 gap-4 p-5">
        <div className="w-full h-[150px] bg-blue-200 rounded-lg shadow-md flex items-center justify-center">
            Header
        </div>
        
        <div className="w-full h-[150px] bg-green-200 rounded-lg shadow-md flex items-center justify-center">
            Contant
        </div>

        <div className="w-full h-[150px] bg-red-200 rounded-lg shadow-md flex items-center justify-center">
            Footer
        </div>
      </div>
    );
  };
  
  export default Layout;
