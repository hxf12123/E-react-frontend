import { useState } from "react";
import { BiCalendarPlus } from "react-icons/bi";

const AddAppointment = ({ onSendAppointment, lastId }) => {
  // 使用状态来管理表单的显示与数据
  const clearData = {
    petName: "",
    ownerName: "",
    aptNotes: "",
    aptDate: "",
    aptTime: "",
  };
//some codes citing from brume7/react-Appointment at github
  const [toggleForm, setToggleForm] = useState(false);
  const [formData, setFormData] = useState(clearData);
  // 处理输入框的值变化

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  // 处理表单提交
  const formDataPosted = () => {
    const { petName, ownerName, aptDate } = formData;
 // 检查必填字段是否填写完整
    if (petName && ownerName && aptDate) {
      // 构造预约信息对象

      const appointmentInfo = {
        id: lastId + 1,
        petName,
        ownerName,
        aptNotes: formData.aptNotes,
        aptDate: aptDate + " " + formData.aptTime,
      };
  // 调用父组件传递的处理函数，将预约信息发送给父组件
      onSendAppointment(appointmentInfo);
       // 清空表单数据
      setFormData(clearData);
           // 切换表单的显示状态
      setToggleForm(!toggleForm);
    } else {
      // 提示用户填写必填字段
      alert("Fill required fields");
    }
  };
// 渲染输入框的函数
  const renderInputField = (label, type, id, value, onChange, required = false) => (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
        {label}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <input
          required={required}
          onChange={(event) => onChange(event.target.value)}
          type={type}
          name={id}
          id={id}
          value={value}
          className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );

  return (
    <div>
      <button
        onClick={() => setToggleForm(!toggleForm)}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left  ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <div>
          <BiCalendarPlus className="inline-block align-text-top" /> Add Appointment
        </div>
      </button>
      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          {renderInputField("Emergency Contact", "text", "ownerName", formData.ownerName, (value) => handleChange("ownerName", value), true)}
          {renderInputField("Name", "text", "petName", formData.petName, (value) => handleChange("petName", value), true)}
          {renderInputField("Apt Date", "date", "aptDate", formData.aptDate, (value) => handleChange("aptDate", value), true)}
          {renderInputField("Apt Time", "time", "aptTime", formData.aptTime, (value) => handleChange("aptTime", value))}
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                onChange={(event) => handleChange("aptNotes", event.target.value)}
                value={formData.aptNotes}
                id="aptNotes"
                name="aptNotes"
                rows="3"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Detailed comments about the condition"
              ></textarea>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={formDataPosted}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAppointment;
