# frozen_string_literal: true

describe VisitorsController do
  describe '#create' do
    it 'creates a contact record' do
      expect { post :send_contact, name: 'Niko', email: 'niko@eventfuel.io', message: 'Hi' }.to change { ContactRecord.count }.by(1)
    end
  end
end
