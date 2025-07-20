export default async function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="bg-gray-200 w-1/4 h-screen p-4">
        <h1>Admin Sidebar</h1>
      </div>
      <main className="bg-white w-3/4 h-screen p-4">{children}</main>
    </div>
  );
}
